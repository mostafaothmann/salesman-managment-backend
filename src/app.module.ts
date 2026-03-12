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
import { TypeIngredientModule } from './type-ingredient/type-ingredient.module';
import { BaseOfferModule } from './base-offer/base-offer.module';
import { OfferModule } from './offer/offer.module';
import { OnlineOfferModule } from './online-offer/online-offer.module';
import { AuthModule } from './auth/auth.module';
import { GroupTypeModule } from './group-type/group-type.module';
import { HospitalModule } from './hospital/hospital.module';
import { MallModule } from './mall/mall.module';
import { HospitalDoctorModule } from './hospital-doctor/hospital-doctor.module';
import { HospitalPharmacistModule } from './hospital-pharmacist/hospital-pharmacist.module';
import { SpeechModule } from './speech/speech.module';
import { PhotoModule } from './photo/photo.module';
import { SampleModule } from './sample/sample.module';
import { VisitModule } from './visit/visit.module';
import { BaseGiftModule } from './base-gift/base-gift.module';
import { GiftVisitModule } from './gift-visit/gift-visit.module';
import { VideoLinkModule } from './video-link/video-link.module';
import { SalesmanMessageModule } from './salesman-message/salesman-message.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    url: "mysql://root:@127.0.0.1:3306/rohalarad3",
    autoLoadEntities: true,
    synchronize: true,
  }),    SpeechModule,PhotoModule,
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
    TypeIngredientModule,
    BaseOfferModule,
    OfferModule,
    OnlineOfferModule,
    AuthModule,
    GroupTypeModule,
    HospitalModule,
    MallModule,
    HospitalDoctorModule,
    HospitalPharmacistModule,
    SpeechModule,
    PhotoModule,
    SampleModule,
    VisitModule,
    BaseGiftModule,
    GiftVisitModule,
    VideoLinkModule,
    SalesmanMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
