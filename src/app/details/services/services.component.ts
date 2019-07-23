import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Playa } from '../../playas.model';
import * as utilities from '../../utils/utils';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnChanges {
  @Input() beach: Playa;
  public utils;
  public aseos: string;
  public lavapies: string;
  public duchas: string;
  public papelera: string;
  public servicioLimpieza: string;
  public oficinaTurismo: string;
  public telefonos: string;
  public establecimientoComida: string;
  public establecimeintoBebida: string;
  public alquilerHamacas: string;
  public alquilerSombrillas: string;
  public alquilerNauticos: string;
  public clubNautico: string;
  public submarinismo: string;
  public zonaSurf: string;
  public zonaInfantil: string;
  public zonaDeportiva: string;

  public FootImg = './assets/images/services/footprints.png';
  public ToiletImg = './assets/images/services/toilet.png';
  public ShowerImg = './assets/images/services/beach_shower.png';
  public BinImg = './assets/images/services/bin.png';
  public CleaningImg = './assets/images/services/cleaning.png';
  public TouristOfficeImg = './assets/images/services/info.png';
  public TelephoneImg = './assets/images/services/telephone.png';
  public BeachBarImg = './assets/images/services/bar.png';
  public DrinkStandImg = './assets/images/services/drinks.png';
  public SunbedImg = './assets/images/services/sunbed.png';
  public UmbrellaImg = './assets/images/services/umbrella.png';
  public NauticsRentalImg = './assets/images/services/sailboat.png';
  public NauticalClubImg = './assets/images/services/yacht.png';
  public DivingAreaImg = './assets/images/services/dive.png';
  public SurfAreaImg = './assets/images/services/surfing.png';
  public ChildrenAreaImg = './assets/images/services/swing.png';
  public SportAreaImg = './assets/images/services/kick.png';
  constructor() {
    this.utils = utilities;
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const changesString = 'beach';
    if (changes[changesString].currentValue !== undefined) {
      const val = changes[changesString].currentValue;
      this.aseos = val.aseos;
      this.lavapies = val.lavapies;
      this.duchas = val.duchas;
      this.papelera = val.papelera;
      this.servicioLimpieza = val.servicio_limpieza;
      this.oficinaTurismo = val.oficina_turismo;
      this.telefonos = val.telefonos;
      this.establecimientoComida = val.establecimiento_comida;
      this.establecimeintoBebida = val.establecimiento_bebida;
      this.alquilerHamacas = val.alquiler_hamacas;
      this.alquilerSombrillas = val.alquiler_sombrillas;
      this.alquilerNauticos = val.alquiler_nauticos;
      this.clubNautico = val.club_nautico;
      this.submarinismo = val.submarinismo;
      this.zonaSurf = val.zona_surf;
      this.zonaInfantil = val.zona_infantil;
      this.zonaDeportiva = val.zona_deportiva;

    }

  }


}
