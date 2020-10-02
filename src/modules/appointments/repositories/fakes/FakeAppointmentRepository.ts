import { v4 as uuidv4 } from 'uuid'
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO'
import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository
  implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      appointment.date === date);

      return findAppointment;
  }

  public async create({
    date,
    provider_id }: ICreateAppointmentDTO): Promise<Appointment> {

    const appointment = new Appointment();

    Object.assign(appointment, { id: uuidv4(), date, provider_id })

    this.appointments.push(appointment)

    return appointment;
  }
}

export default AppointmentsRepository;
