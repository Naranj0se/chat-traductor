DELIMITER //

CREATE PROCEDURE add_contact(pID_user_adding INT, pID_user_added INT)
operacion:BEGIN
    DECLARE isExistContact INT;
    DECLARE vID_room INT;
    
    START TRANSACTION;

        SELECT count(id) INTO isExistContact FROM contacts WHERE id_user_adding = pID_user_adding AND id_user_added = pID_user_added;

        IF isExistContact != 0 THEN
            SELECT "error" as status_code, "Este contacto ya existe." AS mensaje; 
        END IF;

        INSERT INTO contacts(id_user_adding, id_user_added) VALUES (pID_user_adding, pID_user_added);

        IF ROW_COUNT() = 0 THEN
            ROLLBACK;
            SELECT "error" as status_code, "No se pudo insertar el contacto" AS mensaje;
            LEAVE operacion;
        END IF;

        IF pIsExistRoom IS NOT NULL THEN
            SELECT "ok" as status_code, "Se ha añadido exitosamente" AS mensaje, pIsExistRoom AS "id_room";
            COMMIT;
            LEAVE operacion; 
        END IF;

        INSERT INTO rooms VALUES();

        IF ROW_COUNT() = 0 THEN
            ROLLBACK;
            SELECT "error" as status_code, "No se pudo crear un cuarto" AS mensaje;
            LEAVE operacion;
        END IF;

        SET vID_room = LAST_INSERT_ID();

        INSERT INTO participants(id_room, id_user) VALUES (vID_room, pID_user_adding), (vID_room, pID_user_added);

        IF ROW_COUNT() != 2 THEN
            ROLLBACK;
            SELECT "error" as status_code, "No se pudo crear participantes" AS mensaje;
            LEAVE operacion;
        END IF;


        COMMIT;
        SELECT "ok" as status_code, "Se ha añadido exitosamente" AS mensaje;
END //  

DELIMITER //

CREATE PROCEDURE add_contact(pID_user_adding INT, pID_user_added INT)
operacion:BEGIN
    DECLARE isExistContact INT;
    
    START TRANSACTION;

        SELECT count(id) INTO isExistContact FROM contacts WHERE id_user_adding = pID_user_adding AND id_user_added = pID_user_added;

        IF isExistContact != 0 THEN
            SELECT "error" as status_code, "Este contacto ya existe." AS mensaje; 
        END IF;

        INSERT INTO contacts(id_user_adding, id_user_added) VALUES (pID_user_adding, pID_user_added);

        IF ROW_COUNT() = 0 THEN
            ROLLBACK;
            SELECT "error" as status_code, "No se pudo insertar el contacto" AS mensaje;
            LEAVE operacion;
        END IF;

        COMMIT;
        SELECT "ok" as status_code, "Se ha añadido exitosamente" AS mensaje;
END //  