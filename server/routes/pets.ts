import express from 'express'

import * as db from '../db/functions/pets.ts'

const router = express.Router()

// GET all pets for /api/v1/pets
router.get('/', async (req, res) => {
  try {
    const pets = await db.getAllPets()
    res.json(pets)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET pet by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const pet = await db.getPetById(Number(id))
    res.json(pet)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// GET pets by owner id
router.get('/owner/:id', async (req, res) => {
  const { id } = req.params
  try {
    const pets = await db.getPetsByOwnerId(Number(id))
    res.json(pets)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// POST add a new pet
router.post('/', async (req, res) => {
  try {
    const {
      owner_id: ownerId,
      pet_name: petName,
      image,
      dob: dateofBirth,
      sex,
      breed,
      species,
      bio,
      fave_food: faveFood,
      traits,
      busy,
      lazy,
      goofy,
      gorgeous,
      brat,
      loyal,
      playful,
      adventurous,
      foodie,
      snorer,
      crazy,
      floofy,
    } = req.body
    const id = await db.addNewPet({
      ownerId,
      petName,
      image,
      dateofBirth,
      sex,
      breed,
      species,
      bio,
      faveFood,
      traits,
      busy,
      lazy,
      goofy,
      gorgeous,
      brat,
      loyal,
      playful,
      adventurous,
      foodie,
      snorer,
      crazy,
      floofy,
    })
    const url = `/api/v1/pets/${id}`
    res.setHeader('ownerId', url)
    res.status(201).json({
      id,
      ownerId,
      petName,
      image,
      dateofBirth,
      sex,
      breed,
      species,
      bio,
      faveFood,
      traits,
      busy,
      lazy,
      goofy,
      gorgeous,
      brat,
      loyal,
      playful,
      adventurous,
      foodie,
      snorer,
      crazy,
      floofy,
    })
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

// DELETE pet by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await db.deletePet(Number(id))
    res.sendStatus(204)
  } catch (error) {
    console.log('Error: ', error)
    res.sendStatus(500)
  }
})

export default router
