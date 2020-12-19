FROM python:3.9

WORKDIR /service
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN pip install alembic
COPY . ./app
CMD uvicorn app.main:app --host 0.0.0.0 --port 5057
