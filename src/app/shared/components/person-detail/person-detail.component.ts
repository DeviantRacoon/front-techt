import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate('800ms ease-in-out')
      ])
    ])
  ]
})
export class PersonDetailComponent {
  user = {
    name: 'Sarah Johnson',
    position: 'Senior Software Engineer',
    location: 'San Francisco',
    birthDate: 'June 15, 1990',
    phone: '+1 (555) 123-4567',
    languages: ['English', 'Spanish'],
    interests: ['Technology', 'AI', 'Photography', 'Travel'],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Google',
        years: '2020 - Present',
        description: 'Leading cloud infrastructure projects.'
      },
      {
        title: 'Software Engineer',
        company: 'Microsoft',
        years: '2017 - 2020',
        description: 'Developed enterprise solutions using .NET.'
      }
    ],
    education: [
      {
        degree: 'Master of Computer Science',
        school: 'Stanford University',
        years: '2015 - 2017',
        description: 'Specialization in AI and ML'
      },
      {
        degree: 'Bachelor of Engineering',
        school: 'MIT',
        years: '2011 - 2015',
        description: 'Major in Computer Science'
      }
    ],
    skills: ['JavaScript', 'Python', 'Java', 'C#', 'Angular', 'React', 'Docker', 'AWS', 'Google Cloud'],
    certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional Developer']
  };
}
