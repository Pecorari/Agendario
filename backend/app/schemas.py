from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ProfessionalCreate(BaseModel):
  name: str
  email: str
  password: str

class ProfessionalOut(BaseModel):
  id: int
  name: str
  email: str
  class Config:
    orm_mode = True

class ServiceCreate(BaseModel):
  name: str
  price: int
  duration_minutes: int

class ServiceOut(ServiceCreate):
  id: int
  class Config:
    orm_mode: True

class AppointmentCreate(BaseModel):
  client_name: str
  client_phone: str
  service_id: int
  date_time: datetime

class AppointmentOut(AppointmentCreate):
  id: int
  class Config:
    orm_mode = True
