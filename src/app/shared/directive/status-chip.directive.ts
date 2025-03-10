import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatusChip]',
  standalone: true
})
export class StatusChipDirective implements OnInit {
  readonly SUCCESS_STATUS = [
    'Activo',
  ];
  readonly SECONDARY_STATUS = [
    'Pendiente',
  ];
  readonly WARNING_STATUS = [
    'Inactivo',
  ];
  readonly DANGER_STATUS = [
    'Cancelado',
    'Eliminado'
  ];

  @Input() status: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.setBadgeClass();
  }

  private setBadgeClass(): void {
    const badge = this.el.nativeElement;

    this.renderer.removeClass(badge, 'bg-success');
    this.renderer.removeClass(badge, 'bg-warning');
    this.renderer.removeClass(badge, 'bg-danger');

    this.SUCCESS_STATUS.includes(this.status) && this.renderer.addClass(badge, 'bg-success');
    this.SECONDARY_STATUS.includes(this.status) && this.renderer.addClass(badge, 'bg-warning');
    this.WARNING_STATUS.includes(this.status) && this.renderer.addClass(badge, 'bg-warning');
    this.DANGER_STATUS.includes(this.status) && this.renderer.addClass(badge, 'bg-danger');

    this.renderer.addClass(badge, 'badge');
    this.renderer.addClass(badge, 'rounded-pill');
    this.renderer.addClass(badge, 'p-2');
    this.renderer.setAttribute(badge, 'style', 'width: 80px;');
  }
}

