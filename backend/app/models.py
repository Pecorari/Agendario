from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .database import Base

class Professional(Base):
  __tablename__ = "professionals"
  id = Column(Integer, primary_key=True, index=True)
  name = Column(String)
  email = Column(String, unique=True, index=True)
  hashed_password = Column(String)
  services = relationship("Service", back_populates="owner")

class Service(Base):
  __tablename__ = "services"
  id = Column(Integer, primary_key=True, index=True)
  name = Column(String)
  price = Column(Integer)
  duration_minutes = Column(Integer)
  owner_id = Column(Integer, ForeignKey("professionals.id"))
  owner = relationship("Professional", back_populates="services")

class Appointment(Base):
  __tablename__ = "appointments"
  id = Column(Integer, primary_key=True, index=True)
  client_name = Column(String)
  cliente_phone = Column(String)
  service_id = Column(Integer, ForeignKey("services.id"))
  date_time = Column(DateTime)
