FROM python:3.9-slim

COPY ./backend /app/backend
COPY ./requirements.txt /app

WORKDIR /app

RUN pip3 install -r requirements.txt

EXPOSE 8080

CMD ["uvicorn", "backend.server_route:app", "--host", "0.0.0.0", "--port", "8080"]