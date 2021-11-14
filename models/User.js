const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

// creates the User model
class User extends Model {}

//define the table colums and configuration
User.init(
    // colums for the user
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true
       } ,
       username: {
           type: DataTypes.STRING,
           allowNull: false
       },
       email: {
           type: DataTypes.STRING,
           //does not allow duplicate email values
           unique: true,
            validate: {
                isEmail: true
            }
       },
       password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this is the password needs to be at lest the length of the number
            len: [6]
        }
       }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
)

module.exports = User