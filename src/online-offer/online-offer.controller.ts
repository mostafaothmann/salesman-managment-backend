import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnlineOfferService } from './online-offer.service';
import { CreateOnlineOfferDto } from './dto/create-online-offer.dto';
import { UpdateOnlineOfferDto } from './dto/update-online-offer.dto';

@Controller('online-offer')
export class OnlineOfferController {
  constructor(private readonly onlineOfferService: OnlineOfferService) {}

  @Post()
  create(@Body() createOnlineOfferDto: CreateOnlineOfferDto) {
    return this.onlineOfferService.create(createOnlineOfferDto);
  }

  @Get()
  findAll() {
    return this.onlineOfferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onlineOfferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnlineOfferDto: UpdateOnlineOfferDto) {
    return this.onlineOfferService.update(+id, updateOnlineOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onlineOfferService.remove(+id);
  }
}
