-- Active: 1708469503226@@127.0.0.1@3306
CREATE TABLE places (
    id TEXT UNIQUE PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    latitude TEXT NOT NULL,
    longitude TEXT NOT NULL
);

INSERT INTO places (id, nome, latitude, longitude) VALUES (
    'p001',
    'Catedral de Brasília',
    '-15.798331383762319',
    '-47.875457396942224'
);

