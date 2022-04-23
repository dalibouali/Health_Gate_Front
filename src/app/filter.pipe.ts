import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from './doctors/DoctorModel';
@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
    transform(doctors: Doctor[], filter: string) {
        if (!doctors || filter==='') {
            return doctors;
        }
   
        return doctors
        .filter(doctor => 
            {
                
                return doctor.username.toLowerCase().match(filter.toLowerCase()) || doctor.firstName.toLowerCase().match(filter.toLowerCase())|| doctor.lastName.toLowerCase().match(filter.toLowerCase()) //|| doctor.specialities.toUpperCase().match(filter.toUpperCase())
            });
    }
}