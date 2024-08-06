const Joi = require('joi');
const logger = require('../utils/logger');

const TAX_RATE = 0.08; // 8% de imposto
const DELIVERY_FEE = 5.00; // Taxa de entrega fixa

const orderSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      price: Joi.number().positive().required(),
      quantity: Joi.number().integer().positive().required()
    })
  ).required(),
  discount: Joi.number().min(0).optional()
});

const calculateOrder = (req, res) => {
  const { error, value } = orderSchema.validate(req.body);

  if (error) {
    logger.warn('Validation error:', error.details[0].message);
    return res.status(400).json({ error: error.details[0].message });
  }

  const { items, discount = 0 } = value;

  let subtotal = 0;
  items.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  const tax = subtotal * TAX_RATE;
  const totalBeforeDiscount = subtotal + tax + DELIVERY_FEE;
  const total = totalBeforeDiscount - discount;

  logger.info('Order calculated:', { subtotal, tax, deliveryFee: DELIVERY_FEE, discount, total });
  res.json({ 
    subtotal,
    tax,
    deliveryFee: DELIVERY_FEE,
    discount,
    total 
  });
};

module.exports = {
  calculateOrder,
};
