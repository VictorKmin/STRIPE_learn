```$xslt
create schema stripe;

use stripe;

create table tokens
(
    id    int auto_increment
        primary key,
    email varchar(45)  null,
    token varchar(100) null
);
```

