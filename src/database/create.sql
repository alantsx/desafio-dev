create schema cnab;

create table cnab.transactions (
    id serial primary key,
    tipo int not null,
    dataEfetuada Date not null,
    valor float not null,
    cpf varchar(11) not null,
    cartao varchar(12) not null,
    hora time not null,
    donoLoja varchar(14) not null,
    nomeLoja varchar(19) not null
)