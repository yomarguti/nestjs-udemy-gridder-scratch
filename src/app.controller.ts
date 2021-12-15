import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("users")
  getRootRoute() {
    return "<h1>Hello World!</h1>";
  }
}
