// import models
const Product = require('./Product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./producttag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};