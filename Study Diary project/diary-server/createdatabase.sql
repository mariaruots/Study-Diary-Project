DROP DATABASE IF EXISTS diary;
CREATE DATABASE diary;

\c diary;

CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    legend VARCHAR(255) NOT NULL,
    starttime DATE,
    finishtime DATE,
    inprogress BOOLEAN
);

\d topic;