FROM postgres

ENV POSTGRES_USER fp
ENV POSTGRES_PASSWORD fp
ENV POSTGRES_DB fp

ADD init.sql /docker-entrypoint-initdb.d/
