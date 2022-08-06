module.exports=(sequelize,DataTypes)=>{

    const Users=sequelize.define("users",{
        username:{
            types:DataTypes.String
        }

    })
   return Users
}