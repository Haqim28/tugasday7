const { response } = require('express')
const express = require('express')
const app = express()
const port = 8000

app.set('view engine','hbs') 

app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

let isLogin = true

app.get('/', function(request,respond){
    respond.render('index',{isLogin}); 
})

app.get('/add-project', function(request,respond){
    respond.render('addProject')
})

app.post('/add-project', function(request,respond){
    let projectName = request.body.inputprojectname
    let startDate = request.body.startdate
    let endDate = request.body.enddate
    let description = request.body.description
    console.log(projectName)
    console.log(startDate)
    console.log(endDate)
    console.log(description)

    respond.redirect('/')
})
app.get('/detail-project', function(request,respond){
    respond.render('projectDetail')
})

app.get('/detail-project/:name', function(request,respond){
    
    let id=request.params.name
    console.log(id);
    
    respond.render('projectDetail', {
        id,
        title: 'Selamat Datang',
        
    })
})

app.get('/contact', function(request,respond){
    respond.render('contact')
})

app.get('/project-detail', function(request,respond){
    respond.render('projectDetail')
})

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
})