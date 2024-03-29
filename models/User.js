const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// creates the User model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

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
        hooks: {
           async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        
       },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    
    } 
)

module.exports = User