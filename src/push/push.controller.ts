import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
// Remplace par les chemins exacts de tes Guards dans fja-backend :
import { PushService, PushSubscriptionPayload } from './push.service.js';
import { FingerprintGuard } from '../auth/fingerprint.guard.js';

@Controller('push')
@UseGuards(FingerprintGuard) // Assurez-vous que FingerprintGuard est importé correctement
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @Post('subscribe')
  async subscribe(
    @Body() body: { subscription: PushSubscriptionPayload },
    @Headers('user-agent') userAgent?: string,
  ) {
    await this.pushService.saveSubscription(body.subscription, userAgent);
    return { success: true };
  }
}
