const express = require('express');
const db = require('../../data/db-config.js');
const getAll = async () => {
  const result = await db('cars')
  return result
}

const getById = async (id) => {
  const result = await db('cars').where('id', id).first()
  return result
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
}
