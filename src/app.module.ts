import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesmanModule } from './salesman/salesman.module';
import { ProductModule } from './product/product.module';
import { DoctorModule } from './doctor/doctor.module';
import { TypeModule } from './type/type.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { GovernorateModule } from './governorate/governorate.module';
import { AreaModule } from './area/area.module';
import { StreetModule } from './street/street.module';
import { OrderModule } from './order/order.module';
import { PharmacistModule } from './pharmacist/pharmacist.module';
import { RecoveryCaseModule } from './recovery-case/recovery-case.module';
import { RecoveryCaseImageModule } from './recovery-case-image/recovery-case-image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingModule } from './building/building.module';
import { CityModule } from './city/city.module';
import { OnlineOrderModule } from './online-order/online-order.module';
import { AssistantModule } from './assistant/assistant.module';
import { OnlineCustomerModule } from './online-customer/online-customer.module';
import { DoctorPharmacistModule } from './doctor-pharmacist/doctor-pharmacist.module';
import { SalesmanAreaModule } from './salesman-area/salesman-area.module';
import { PharmacistVisitModule } from './pharmacist-visit/pharmacist-visit.module';
import { AssociationModule } from './association/association.module';
import { AssociationDoctorModule } from './association-doctor/association-doctor.module';
import { AssociationPharmacistModule } from './association-pharmacist/association-pharmacist.module';
import { SpecializationModule } from './specialization/specialization.module';
import { DoctorVisitModule } from './doctor-visit/doctor-visit.module';
import { OnlineProductModule } from './online-product/online-product.module';
import { SpecializationTypeModule } from './specialization-type/specialization-type.module';
import { SampleDoctorModule } from './sample-doctor/sample-doctor.module';
import { SamplePharmacistModule } from './sample-pharmacist/sample-pharmacist.module';
import { TypeIngredientModule } from './type-ingredient/type-ingredient.module';
import { BaseOfferModule } from './base-offer/base-offer.module';
import { OfferModule } from './offer/offer.module';
import { OnlineOfferModule } from './online-offer/online-offer.module';
import { AuthModule } from './auth/auth.module';
import { GroupTypeModule } from './group-type/group-type.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    url: "mysql://root:@127.0.0.1:3306/rohalarad2",
    autoLoadEntities: true,
    synchronize: true,
  }),    
    SalesmanModule, ProductModule, DoctorVisitModule, DoctorModule, TypeModule, IngredientModule,
    GovernorateModule, AreaModule, StreetModule, OrderModule, PharmacistModule, RecoveryCaseModule,
    RecoveryCaseImageModule,
    BuildingModule,
    CityModule,
    OnlineOrderModule,
    AssistantModule,
    OnlineCustomerModule,
    DoctorPharmacistModule,
    SalesmanAreaModule,
    PharmacistVisitModule,
    AssociationModule,
    AssociationDoctorModule,
    AssociationPharmacistModule,
    SpecializationModule,
    OnlineProductModule,
    SpecializationTypeModule,
    SampleDoctorModule,
    SamplePharmacistModule,
    TypeIngredientModule,
    BaseOfferModule,
    OfferModule,
    OnlineOfferModule,
    AuthModule,
    GroupTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
