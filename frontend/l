CREATE TABLE customer (
    customer_id  VARCHAR(50) NOT NULL,
    user_id      VARCHAR(50) NOT NULL,
    password     VARCHAR(50) NOT NULL,
    date_time    VARCHAR(50) NOT NULL
);

ALTER TABLE customer ADD CONSTRAINT customer_pk PRIMARY KEY ( customer_id );

CREATE TABLE customer_location (
    location_id  VARCHAR(50) NOT NULL,
    customer_id  VARCHAR(50) NOT NULL
);

ALTER TABLE customer_location ADD CONSTRAINT customer_location_pk PRIMARY KEY ( location_id,
                                                                                customer_id );

CREATE TABLE dasa_user (
    user_id     VARCHAR(50) NOT NULL,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50) NOT NULL,
    email       VARCHAR(50) NOT NULL,
    phone       VARCHAR(50) NOT NULL
);

ALTER TABLE dasa_user ADD CONSTRAINT user_pk PRIMARY KEY ( user_id );

CREATE TABLE employee (
    employee_id   VARCHAR(50) NOT NULL,
    user_id       VARCHAR(50) NOT NULL,
    password      VARCHAR(50) NOT NULL,
    date_time     VARCHAR(50) NOT NULL,
    deleted_date  VARCHAR(50) NOT NULL,
    status        VARCHAR(50) NOT NULL,
    work          VARCHAR(50) NOT NULL
);

ALTER TABLE employee ADD CONSTRAINT employee_pk PRIMARY KEY ( employee_id );

CREATE TABLE employee_location (
    employee_id  VARCHAR(50) NOT NULL,
    location_id  VARCHAR(50) NOT NULL
);

ALTER TABLE employee_location ADD CONSTRAINT employee_location_pk PRIMARY KEY ( employee_id,
                                                                                location_id );

CREATE TABLE employee_work (
    employee_work_id       VARCHAR(50) NOT NULL,
    product_id             VARCHAR(50) NOT NULL,
    date_started           VARCHAR(50) NOT NULL,
    estimated_finish_time  VARCHAR(50) NOT NULL,
    status                 VARCHAR(50) NOT NULL
);

ALTER TABLE employee_work ADD CONSTRAINT employee_work_pk PRIMARY KEY ( employee_work_id );

CREATE TABLE favourites (
    customer_id  VARCHAR(50) NOT NULL,
    product_id   VARCHAR(50) NOT NULL
);

ALTER TABLE favourites ADD CONSTRAINT favourites_pk PRIMARY KEY ( customer_id,
                                                                  product_id );

CREATE TABLE location (
    location_id  VARCHAR(50) NOT NULL,
    city         VARCHAR(50) NOT NULL,
    street       VARCHAR(50) NOT NULL
);

ALTER TABLE location ADD CONSTRAINT location_pk PRIMARY KEY ( location_id );

CREATE TABLE material_needed (
    image  VARCHAR(50) NOT NULL,
    title  VARCHAR(50) NOT NULL
);

ALTER TABLE material_needed ADD CONSTRAINT material_needed_pk PRIMARY KEY ( image );

CREATE TABLE order_item (
    order_id    VARCHAR(50) NOT NULL,
    product_id  VARCHAR(50) NOT NULL,
    quantity    INTEGER NOT NULL,
    length      FLOAT NOT NULL,
    width       FLOAT NOT NULL,
    staus       VARCHAR(50) NOT NULL,
    completed   CHAR(1) NOT NULL,
    image       VARCHAR(50) NOT NULL
);

ALTER TABLE order_item ADD CONSTRAINT order_item_pk PRIMARY KEY ( order_id,
                                                                  product_id );

CREATE TABLE order_through (
    order_id     VARCHAR(50) NOT NULL,
    product_id   VARCHAR(50) NOT NULL,
    customer_id  VARCHAR(50) NOT NULL,
    tailor_id    VARCHAR(50) NOT NULL,
    employee_id  VARCHAR(50) NOT NULL
);

ALTER TABLE order_through ADD CONSTRAINT order_through_pk PRIMARY KEY ( order_id,
                                                                        product_id );

CREATE TABLE product (
    product_id         VARCHAR(50) NOT NULL,
    tailor_id          VARCHAR(50) NOT NULL,
    name               VARCHAR(50) NOT NULL,
    category           VARCHAR(50) NOT NULL,
    in_stock           INTEGER NOT NULL,
    date_time          VARCHAR(50) NOT NULL,
    price              FLOAT NOT NULL,
    description        VARCHAR(1000) NOT NULL,
    cloth_description  VARCHAR(1000) NOT NULL
);

ALTER TABLE product ADD CONSTRAINT product_pk PRIMARY KEY ( product_id );

CREATE TABLE product_request (
    product_request_id  VARCHAR(50) NOT NULL,
    tailor_id           VARCHAR(50) NOT NULL,
    date_time           VARCHAR(50) NOT NULL,
    name                VARCHAR(50) NOT NULL,
    design              VARCHAR(50) NOT NULL,
    description         VARCHAR(1000) NOT NULL,
    cloth_description   VARCHAR(50) NOT NULL,
    style               VARCHAR(50) NOT NULL,
    price               FLOAT NOT NULL,
    status              VARCHAR(50) NOT NULL
);

ALTER TABLE product_request ADD CONSTRAINT product_request_pk PRIMARY KEY ( product_request_id );

CREATE TABLE product_request_image (
    product_request_id  VARCHAR(50) NOT NULL,
    image               VARCHAR(50) NOT NULL
);

ALTER TABLE product_request_image ADD CONSTRAINT product_request_image_pk PRIMARY KEY ( product_request_id,
                                                                                        image );

CREATE TABLE product_specification (
    id          VARCHAR(50) NOT NULL,
    product_id  VARCHAR(50) NOT NULL,
    image       VARCHAR(50) NOT NULL,
    color       VARCHAR(50) NOT NULL
);

ALTER TABLE product_specification ADD CONSTRAINT product_specification_pk PRIMARY KEY ( id,
                                                                                        product_id );

CREATE TABLE tailor (
    tailor_id     VARCHAR(50) NOT NULL,
    user_id       VARCHAR(50) NOT NULL,
    shop_name     VARCHAR(50) NOT NULL,
    password      VARCHAR(50) NOT NULL,
    date_time     VARCHAR(50) NOT NULL,
    deleted_time  VARCHAR(50) NOT NULL,
    image         VARCHAR(100) NOT NULL
);

ALTER TABLE tailor ADD CONSTRAINT tailor_pk PRIMARY KEY ( tailor_id );

CREATE TABLE tailor_location (
    tailor_id    VARCHAR(50) NOT NULL,
    location_id  VARCHAR(50) NOT NULL
);

ALTER TABLE tailor_location ADD CONSTRAINT tailor_location_pk PRIMARY KEY ( tailor_id,
                                                                            location_id );

CREATE TABLE the_order (
    order_id                 VARCHAR(50) NOT NULL,
    date_time                VARCHAR(50) NOT NULL,
    shipping_price           FLOAT NOT NULL,
    total_price              FLOAT NOT NULL,
    delivered_date           VARCHAR(50) NOT NULL,
    ispaid                   CHAR(1) NOT NULL,
    status                   VARCHAR(50) NOT NULL,
    estimated_delivery_date  VARCHAR(50) NOT NULL
);

ALTER TABLE the_order ADD CONSTRAINT order_pk PRIMARY KEY ( order_id );

CREATE TABLE user_type (
    user_id  VARCHAR(50) NOT NULL,
    type     VARCHAR(50) NOT NULL,
    status   VARCHAR(50) NOT NULL
);

ALTER TABLE user_type ADD CONSTRAINT user_type_pk PRIMARY KEY ( user_id );

ALTER TABLE customer_location
    ADD CONSTRAINT customer_location_customer_fk FOREIGN KEY ( customer_id )
        REFERENCES customer ( customer_id );

ALTER TABLE customer_location
    ADD CONSTRAINT customer_location_location_fk FOREIGN KEY ( location_id )
        REFERENCES location ( location_id );

ALTER TABLE customer
    ADD CONSTRAINT customer_user_fk FOREIGN KEY ( user_id )
        REFERENCES dasa_user ( user_id );

ALTER TABLE employee_location
    ADD CONSTRAINT employee_location_employee_fk FOREIGN KEY ( employee_id )
        REFERENCES employee ( employee_id );

ALTER TABLE employee_location
    ADD CONSTRAINT employee_location_location_fk FOREIGN KEY ( location_id )
        REFERENCES location ( location_id );

ALTER TABLE employee
    ADD CONSTRAINT employee_user_fk FOREIGN KEY ( user_id )
        REFERENCES dasa_user ( user_id );

ALTER TABLE employee_work
    ADD CONSTRAINT employee_work_product_fk FOREIGN KEY ( product_id )
        REFERENCES product ( product_id );

ALTER TABLE favourites
    ADD CONSTRAINT favourites_customer_fk FOREIGN KEY ( customer_id )
        REFERENCES customer ( customer_id );

ALTER TABLE favourites
    ADD CONSTRAINT favourites_product_fk FOREIGN KEY ( product_id )
        REFERENCES product ( product_id );

ALTER TABLE order_item
    ADD CONSTRAINT order_item_material_needed_fk FOREIGN KEY ( image )
        REFERENCES material_needed ( image );

ALTER TABLE order_item
    ADD CONSTRAINT order_item_order_fk FOREIGN KEY ( order_id )
        REFERENCES the_order ( order_id );

ALTER TABLE order_item
    ADD CONSTRAINT order_item_product_fk FOREIGN KEY ( product_id )
        REFERENCES product ( product_id );

ALTER TABLE order_through
    ADD CONSTRAINT order_through_order_fk FOREIGN KEY ( order_id )
        REFERENCES the_order ( order_id );

ALTER TABLE order_through
    ADD CONSTRAINT order_through_product_fk FOREIGN KEY ( product_id )
        REFERENCES product ( product_id );

ALTER TABLE product_request_image
    ADD CONSTRAINT product_request_image FOREIGN KEY ( product_request_id )
        REFERENCES product_request ( product_request_id );

ALTER TABLE product_request
    ADD CONSTRAINT product_request_tailor_fk FOREIGN KEY ( tailor_id )
        REFERENCES tailor ( tailor_id );

ALTER TABLE product_specification
    ADD CONSTRAINT product_specification FOREIGN KEY ( product_id )
        REFERENCES product ( product_id );

ALTER TABLE product
    ADD CONSTRAINT product_tailor_fk FOREIGN KEY ( tailor_id )
        REFERENCES tailor ( tailor_id );

ALTER TABLE tailor_location
    ADD CONSTRAINT tailor_location_location_fk FOREIGN KEY ( location_id )
        REFERENCES location ( location_id );

ALTER TABLE tailor_location
    ADD CONSTRAINT tailor_location_tailor_fk FOREIGN KEY ( tailor_id )
        REFERENCES tailor ( tailor_id );

ALTER TABLE tailor
    ADD CONSTRAINT tailor_user_fk FOREIGN KEY ( user_id )
        REFERENCES dasa_user ( user_id );

ALTER TABLE user_type
    ADD CONSTRAINT user_type_user_fk FOREIGN KEY ( user_id )
        REFERENCES dasa_user ( user_id );






INSERT INTO order_through values ("od1",	"pod1",	"cus1",	"tail1",	"emp1");
INSERT INTO order_through values ("od1",	"pod2",	"cus1",	"tail1",	"emp2");
INSERT INTO order_through values ("od2",	"pod1",	"cus2",	"tail3",	"emp5");
INSERT INTO order_through values ("od2",	"pod3",	"cus2",	"tail2",	"emp3");
INSERT INTO order_through values ("od3",	"pod4",	"cus3",	"tail2",	"emp3");
INSERT INTO order_through values ("od3",	"pod5",	"cus3",	"tail3",	"emp5");
INSERT INTO order_through values ("od4",	"pod7",	"cus4",	"tail4",	"emp6");
INSERT INTO order_through values ("od5",	"pod7",	"cus5",	"tail4",	"emp6");         




INSERT INTO product_request_image values ("pr1", "image1");   
INSERT INTO product_request_image values ("pr1", "image2");   
INSERT INTO product_request_image values ("pr1", "image3");   
INSERT INTO product_request_image values ("pr2", "image4");
INSERT INTO product_request_image values ("pr2", "image5");
INSERT INTO product_request_image values ("pr2", "image6");   
INSERT INTO product_request_image values ("pr3", "image7");   
INSERT INTO product_request_image values ("pr3", "image8");   
INSERT INTO product_request_image values ("pr3", "image9");   
INSERT INTO product_request_image values ("pr4", "image10");   
INSERT INTO product_request_image values ("pr4", "image11");   
INSERT INTO product_request_image values ("pr4", "image12");   
INSERT INTO product_request_image values ("pr5", "image13");   
INSERT INTO product_request_image values ("pr5", "image14");   
INSERT INTO product_request_image values ("pr5", "image15");   
INSERT INTO product_request_image values ("pr6", "image16");   
INSERT INTO product_request_image values ("pr6", "image17");   
INSERT INTO product_request_image values ("pr6", "image18");   
INSERT INTO product_request_image values ("pr7", "image19");
INSERT INTO product_request_image values ("pr7", "image20");
INSERT INTO product_request_image values ("pr7", "image21");   
INSERT INTO product_request_image values ("pr8", "image22");   
INSERT INTO product_request_image values ("pr8", "image23");   
INSERT INTO product_request_image values ("pr8", "image24");   
INSERT INTO product_request_image values ("pr9", "image25");   
INSERT INTO product_request_image values ("pr9", "image26");   
INSERT INTO product_request_image values ("pr9", "image27");   
INSERT INTO product_request_image values ("pr10", "image28");   
INSERT INTO product_request_image values ("pr10", "image29");   
INSERT INTO product_request_image values ("pr10", "image30");   






