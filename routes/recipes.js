const express = require('express');
const axios = require('axios');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/search', auth, async (req, res) => {
  try {
    const { query, diet, cuisine } = req.query;
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
      params: {
        type: 'public',
        q: query,
        app_id: process.env.EDAMAM_APP_ID,
        app_key: process.env.EDAMAM_APP_KEY,
        diet,
        cuisineType: cuisine
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

router.post('/favorite', auth, async (req, res) => {
  try {
    const { recipeId, title, imageUrl, sourceUrl } = req.body;
    
    const user = req.user;
    if (user.favoriteRecipes.some(recipe => recipe.recipeId === recipeId)) {
      return res.status(400).json({ error: 'Recipe already in favorites' });
    }

    user.favoriteRecipes.push({ recipeId, title, imageUrl, sourceUrl });
    await user.save();

    res.json(user.favoriteRecipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/favorites', auth, async (req, res) => {
  try {
    res.json(req.user.favoriteRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/favorite/:recipeId', auth, async (req, res) => {
  try {
    const user = req.user;
    user.favoriteRecipes = user.favoriteRecipes.filter(
      recipe => recipe.recipeId !== req.params.recipeId
    );
    await user.save();
    
    res.json(user.favoriteRecipes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router; 