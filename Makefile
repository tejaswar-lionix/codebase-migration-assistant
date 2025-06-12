build:
	docker build -t migration-assistant .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
