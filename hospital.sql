-- Creating database hospital 
CREATE DATABASE hospital;

USE hospital;

-- Creating admissions table
CREATE TABLE `admissions`(
  `admission_id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int NOT NULL,
  `admission_date` date NOT NULL,
  `service` varchar(50) NOT NULL,
  `primary_diagnosis` varchar(50) NOT NULL,
  PRIMARY KEY (`admission_id`),
  KEY `p_id_idx` (`patient_id`),
  CONSTRAINT `p_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`)
)ENGINE=InnoDB;

-- Creating dischargers table
CREATE TABLE `discharges`(
  `discharges_id` int NOT NULL AUTO_INCREMENT,
  `admission_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `discharge_date` date NOT NULL,
  `discharge_disposition` varchar(50) NOT NULL,
  PRIMARY KEY (`discharges_id`),
  KEY `admission_id_idx` (`admission_id`),
  KEY `patient_id_idx` (`patient_id`),
  CONSTRAINT `adm_id` FOREIGN KEY (`admission_id`) REFERENCES `admissions` (`admission_id`),
  CONSTRAINT `pat_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`)
)ENGINE=InnoDB;

-- Creating ed_visits table
CREATE TABLE `ed_visits`(
  `ed_visit_id` int NOT NULL AUTO_INCREMENT,
  `visit_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `acuity` int NOT NULL,
  `reason_for_visit` varchar(50) NOT NULL,
  `ed_disposition` varchar(50) NOT NULL,
  PRIMARY KEY (`ed_visit_id`),
  KEY `visit_id_idx` (`visit_id`),
  KEY `patient_id_idx` (`patient_id`),
  CONSTRAINT `patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`),
  CONSTRAINT `visit_id` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`visit_id`)
)ENGINE=InnoDB;

-- Creating patients table
CREATE TABLE `patients`(
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(30) NOT NULL,
  `language` varchar(30) NOT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB;

-- Creating providers table
CREATE TABLE `providers` (
  `provider_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `provider_specialty` varchar(50) NOT NULL,
  `email_address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(30) DEFAULT NULL,
  `date_joined` date NOT NULL,
  PRIMARY KEY (`provider_id`)
) ENGINE=InnoDB;

-- Creating visits table
CREATE TABLE `visits` (
  `visit_id` int NOT NULL AUTO_INCREMENT,
  `patient_id` int NOT NULL,
  `provider_id` int NOT NULL,
  `date_of_visit` date NOT NULL,
  `date_scheduled` date NOT NULL,
  `visit_department_id` int NOT NULL,
  `visit_type` varchar(50) NOT NULL,
  `blood_pressure_systolic` int DEFAULT NULL,
  `blood_pressure_diastolic` decimal(10,0) DEFAULT NULL,
  `pulse` decimal(10,0) DEFAULT NULL,
  `visit_status` varchar(50) NOT NULL,
  PRIMARY KEY (`visit_id`),
  KEY `patient_id_idx` (`patient_id`),
  KEY `provider_id_idx` (`provider_id`),
  CONSTRAINT `pati_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `provider_id` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`provider_id`)
) ENGINE=InnoDB;

-- Creating doctors tables



-- Creating appointments table