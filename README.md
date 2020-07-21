## Script

```shell script
#Create Admin account for /admin
python manage.py createsuperuser  

# Create Model and Api for /api
python manage.py migrate
python manage.py makemigrations astralwhale
 
# Run django server
python manage.py runserver

# Build frontend for dev
cd ./frontend && npm run dev

# Build frontend for prod
cd ./frontend && npm run build
```

## Dev:

Run:
```shell script
# Run django server
python manage.py runserver

# Build frontend for prod
cd ./frontend && npm run build
```

## Deploy