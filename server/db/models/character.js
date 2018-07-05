const Sequelize = require('sequelize')
const db = require('../db')


const Chracter = db.define('character', {
  charactername: {
    type: Sequelize.STRING
  },
  playername: {
    type: Sequelize.STRING
  },
  class: {
    type: Sequelize.STRING
  },
  level: {
    type: Sequelize.INTEGER
  },
  race: {
    type: Sequelize.STRING
  },
  alignment: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  height: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.INTEGER
  },
  hair: {
    type: Sequelize.STRING
  },
  skin: {
    type: Sequelize.STRING
  },
  strScore: {
    type: Sequelize.INTEGER
  },
  strModifier: {
    type: Sequelize.INTEGER
  },
  dexScore: {
    type: Sequelize.INTEGER
  },
  dexModifier: {
    type: Sequelize.INTEGER
  },
  conScore: {
    type: Sequelize.INTEGER
  },
  conModifier: {
    type: Sequelize.INTEGER
  },
  intScore: {
    type: Sequelize.INTEGER
  },
  intModifier: {
    type: Sequelize.INTEGER
  },
  wisScore: {
    type: Sequelize.INTEGER
  },
  wisModifier: {
    type: Sequelize.INTEGER
  },
  chaScore: {
    type: Sequelize.INTEGER
  },
  chaModifier: {
    type: Sequelize.INTEGER
  },
  strTempScore: {
    type: Sequelize.INTEGER
  },
  strTempModifier: {
    type: Sequelize.INTEGER
  },
  dexTempScore: {
    type: Sequelize.INTEGER
  },
  dexTempModifier: {
    type: Sequelize.INTEGER
  },
  conTempScore: {
    type: Sequelize.INTEGER
  },
  conTempModifier: {
    type: Sequelize.INTEGER
  },
  intTempScore: {
    type: Sequelize.INTEGER
  },
  intTempModifier: {
    type: Sequelize.INTEGER
  },
  wisTempScore: {
    type: Sequelize.INTEGER
  },
  wisTempModifier: {
    type: Sequelize.INTEGER
  },
  chaTempScore: {
    type: Sequelize.INTEGER
  },
  chaTempModifier: {
    type: Sequelize.INTEGER
  },
  initiativeMiscMod: {
    type: Sequelize.INTEGER
  },
  totalHp: {
    type: Sequelize.INTEGER
  },
  currentHp: {
    type: Sequelize.INTEGER
  },
  nonlethalDamage: {
    type: Sequelize.INTEGER
  },
  speed: {
    type: Sequelize.INTEGER
  },
  damageReduction: {
    type: Sequelize.INTEGER
  },
  armorBonus: {
    type: Sequelize.INTEGER
  },
  shieldBonus: {
    type: Sequelize.INTEGER
  },
  sizeMod: {
    type: Sequelize.INTEGER
  },
  natArmor: {
    type: Sequelize.INTEGER
  },
  deflMod: {
    type: Sequelize.INTEGER
  },
  miscArmorMod: {
    type: Sequelize.INTEGER
  },
  touchAC: {
    type: Sequelize.INTEGER
  },
  flatFootedAC: {
    type: Sequelize.INTEGER
  }
})
