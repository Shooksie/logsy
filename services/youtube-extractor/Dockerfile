FROM python:3.9

WORKDIR /service
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . ./
CMD uvicorn api:app --host 0.0.0.0 --port 5059

