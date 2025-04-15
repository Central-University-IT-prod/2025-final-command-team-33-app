FROM python:3.11-slim

ENV POSTGRES_DB=prod_db
ENV POSTGRES_USER=prod
ENV POSTGRES_PASSWORD=prod_password
ENV POSTGRES_LINK=postgresql+psycopg2://prod:prod_password@localhost:5432/prod_db
ENV PYTHONPATH=/backend

WORKDIR /backend

RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY . /backend/backend

RUN pip install -r backend/requirements.txt

EXPOSE 8080
CMD ["waitress-serve", "--port", "8080", "--host=0.0.0.0", "backend.src.main:application"]
