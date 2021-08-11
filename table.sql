create table testtable1
(
    id serial not null,
    item varchar(100),
    section varchar(100),
    "datePurchased" varchar(100),
    "propertyNumber" varchar(100),
    description varchar(100),
    "serialNumber" varchar(100),
    amount varchar(100),
    "icsNumber" varchar(100),
    quantity int
);

create unique index testtable1_id_uindex
	on testtable1 (id);

alter table testtable1
    add constraint testtable1_pk
        primary key (id);