import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

import { Playa } from '../../playas.model';
import * as utilities from '../../utils/utils';
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit, OnChanges {
  public utils;
  @Input() beach: Playa;
  public comunidadAutonoma: string;
  public provincia: string;
  public isla: string;
  public codigoIneMunicipio: string;
  public terminMunicipal: string;
  public webMunicipal: string;
  public identificador: string;
  public nombre: string;
  public nombreAlternativo: string;
  public nombreAlternativo2: string;
  public descripcion: string;
  public longitud: string;
  public anchura: string;
  public variacionAnchura: string;
  public gradoOcupacion: string;
  public gradoUrbanizacion: string;
  public paseoMaritimo: string;
  public tipoPaseoMaritimo: string;
  public tipoDeArena: string;
  public condicionesBano: string;
  public zonaFondeoBalizada: string;
  public nudismo: string;
  public vegetacion: string;
  public vegetacionLugar: string;
  public actuaciones: string;
  public actuacionesTipo: string;
  public banderaAzul: string;
  public auxilioYSalvamento: string;
  public auxilioYSalvamentoDesc: string;
  public senalizacionPeligro: string;
  public senalizacionPeligroDesc: string;
  public formaDeAcceso: string;
  public senalizacionAccesos: string;
  public accesoDiscapacitados: string;
  public carreteraMasProxima: string;
  public autobus: string;
  public autobusTipo: string;
  public aparcamiento: string;
  public aparcamientoSeguridad: string;
  public aparcamientoNumPlazas: string;
  public aseos: string;
  public lavapies: string;
  public duchas: string;
  public telefonos: string;
  public papelera: string;
  public servicioLimpieza: string;
  public alquilerSombrillas: string;
  public alquilerSamacas: string;
  public alquilerNauticos: string;
  public oficinaTurismo: string;
  public establecimientoComida: string;
  public establecimientoBebida: string;
  public zonaInfantil: string;
  public zonaDeportiva: string;
  public clubNautico: string;
  public submarinismo: string;
  public zonaSurf: string;
  public observaciones: string;
  public coordenadaX: string;
  public coordenadaY: string;
  public huso: string;
  public coordenadaGeograficaLongitud: string;
  public coordenadaGeograficaLatitud: string;
  public puertoDeportivo: string;
  public webPuertoDeportivo: string;
  public distanciaPuertoDeportivo: string;
  public hospital: string;
  public direccionHospital: string;
  public telefonoHospital: string;
  public distanciaHospital: string;
  public composicion: string;
  public fachadaLitoral: string;
  public espacioProtegido: string;
  public espacioProtegidoDesc: string;
  public links: string;
  public images: string;
  constructor(private ref: ChangeDetectorRef) {
    this.utils = utilities;
  }
  ngOnChanges(changes: SimpleChanges) {
    const chStr = 'beach';
    const chVal = changes[chStr];
    if (chVal.currentValue !== undefined) {
      const val = chVal.currentValue;
        // 1 tipo de playa
      this.composicion = val.composicion;
      this.tipoDeArena = val.tipo_de_arena;
      this.condicionesBano = val.condiciones_baño;
      this.zonaFondeoBalizada = val.zona_fonde_balizada;
      this.nudismo = val.nudismo;
      // 2 environmental aspects
      this.vegetacion = val.vegetacion;
      this.espacioProtegido = val.espacio_protegido;
      this.actuaciones = val.actuaciones;
      this.banderaAzul = val.bandera_azul;
      // 3 nearest hospital
      this.hospital = val.hospital;
      this.direccionHospital = val.direccion_hospital;
      this.telefonoHospital = val.telefono_hospital;
      this.distanciaHospital = val.distancia_hospital;
      // 4 Access
      this.formaDeAcceso = val.forma_de_acceso;
      this.senalizacionAccesos = val.señalizacion_acceso;
      this.accesoDiscapacitados = val.acceso_discapacitados;
      this.coordenadaX = val.coordenada_x;
      this.coordenadaY = val.coordenada_y;
      this.huso = val.huso;
      this.coordenadaGeograficaLatitud = val.coordenada_geografica_latitud;
      this.coordenadaGeograficaLongitud = val.coordenada_geografica_longitud;
      // 5 Security
      this.senalizacionPeligro = val.señalizacion_peligro;
      this.auxilioYSalvamento = val.auxilio_y_salvamento;
      // 6 Transport
      this.carreteraMasProxima = val.carretera_mas_proxima;
      this.autobus = val.bus;
      this.aparcamiento = val.aparcamiento;
      // 7 Pleasure harbour
      this.puertoDeportivo = val.puerto_deportivo;
      this.distanciaPuertoDeportivo = val.distancia_puerto_deportivo;
      // 8 Observaciones
      this.observaciones = val.observaciones;
      this.ref.detectChanges();
    }
  }

  ngOnInit() {
  }

}
