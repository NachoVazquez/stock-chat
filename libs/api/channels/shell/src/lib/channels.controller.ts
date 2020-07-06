import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { Channel, ChannelsService } from '@stock-chat/api/channels/domain';
import { AuthenticationGuard } from '@stock-chat/api/shared/auth/utils';
import { ChannelDTO, CreateChannelDTO } from '@stock-chat/shared/dtos';

@UseGuards(AuthenticationGuard)
@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  async index(): Promise<Channel[]> {
    return await this.channelsService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Channel> {
    if (!id) {
      throw new HttpException(
        'ID parameter is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    const channel = await this.channelsService.findById(id);
    if (!channel) {
      throw new HttpException(
        `The channel with the id: ${id} does not exists`,
        HttpStatus.BAD_REQUEST
      );
    }

    return channel;
  }

  @Post()
  async create(@Body() channelToCreate: CreateChannelDTO): Promise<ChannelDTO> {
    if (
      !channelToCreate ||
      (channelToCreate && Object.keys(channelToCreate).length === 0)
    ) {
      throw new HttpException('Missing informations', HttpStatus.BAD_REQUEST);
    }

    console.log(channelToCreate);

    const channel = await this.channelsService.create(channelToCreate);

    return channel;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() channelToUpdate: Channel) {
    if (!id) {
      throw new HttpException(
        'ID parameter is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    await this.channelsService.update(id, channelToUpdate);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    if (!id) {
      throw new HttpException(
        'ID parameter is missing',
        HttpStatus.BAD_REQUEST
      );
    }

    await this.channelsService.delete(id);
  }
}
