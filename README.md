# QuadB_Tech Internship Assignment

**To run a project :**

 Follow the following steps :
 
 
 **1) Clone the repository :**
 
  To clone the Repository you need to run the following command in your git bash by navgating the target folder 
      
    git clone https://github.com/blendal-106/QuadB_Tech

  Now the folder of this project is created . Now you need to navigate this folder and Run next command.

 
 **2) Install the required dependencies.**

 To install run the following command :

    npm install


  **3) Now you have all dependencies**:

  Now you need to run the Project by executing this command 

    npm start


**4) Before you go you need to have a your postgressql database. You should connect to your database.**

  Follow the given steps :
  
  - Open db.js file in Utils folder
    
      You will find this part of code in it

        const sequelize  =new  Sequelize('QuadB','postgres','your_password',{
          dialect:'postgres',
          host : 'localhost'
        })

    You need to update this function according to your database. You can use any SQL database configuration. You just need to configure the database correctly. For each database there are different dialect that you have to mention

    for ex :
    
        const sequelize  =new  Sequelize('QuadB', //your database name
          'postgres', //your username for the databse
          'your_password', // your password for that user
          {
           dialect:'mysql', //for mentioning the sql database name here
           host : 'localhost' // the domain where it is running default localhost
        })


  After setting your database configuration.....


**Now you are ready to go 🚀🚀**

**Run Project Now**

    npm start
     
