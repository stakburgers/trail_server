--
-- PostgreSQL database cluster dump
--

-- Started on 2023-10-05 17:36:53

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:lU/xj2UKkDIsiDjYY0kDNA==$Z/uBKh0IwvvOVVz5fh32gfz1i0ahxlb3lNffPLn5Zxo=:iUJoLpVWP56qC3rAPmOt4iLgG5O4/+MM20KLAsaOpZg=';
CREATE ROLE trailsowner;
ALTER ROLE trailsowner WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:eaHUZUMXpvV3+TDow3qx2w==$Zk8G/MM10Dy+upp+TTn64S8Dk1Lpp1zwwKRDoHQ8DjE=:9OovXic9M26qg4mt8wONfM3MRco9dxHBklOxf7ZiXNA=';
CREATE ROLE trailsuser1;
ALTER ROLE trailsuser1 WITH NOSUPERUSER INHERIT NOCREATEROLE NOCREATEDB LOGIN REPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:XdR/W1btmCS9KFIVKVpLXg==$DYhw1b5yGkFcOkmKI6+Q8SjM/PSs5zRwXSHrSxWN7wA=:iJqeC7jAANiKMzVoY8YdYDT+igI31SBqkIejrK2hmzc=';
COMMENT ON ROLE trailsuser1 IS 'User account for Auckland Trails data';

--
-- User Configurations
--








-- Completed on 2023-10-05 17:36:53

--
-- PostgreSQL database cluster dump complete
--

