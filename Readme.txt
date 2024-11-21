Steps needed to run the project:
cd backend
pip install -r requirements.txt


back to main folder
cd frontend
npm install axios chartjs chartjs-adapter-date-fns chartjs-chart-financial react-chartjs-2



To run the project:(Blockhouse-dashboard)
npm start 






Steps followed to create project:

First create virtual env 
py -m venv .venv
.venv\Scripts\Activate 

create file for requirements.txt 
install them
then create a django project(backend)
 django-admin startproject backend
python manage.py startapp api

settings.py:
in installed apps:
    'api',
    'rest_framework',
    'corsheaders'
CORS_ALLOWED_ORIGINS = ['http://localhost:3000',]

python manage.py makemigrations
python manage.py migrate
python manage.py runserver

frontend:
 npx create-next-app@latest frontend 
npm install chart.js react-chartjs-2 axios

