import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { UserInfo } from './UserInfo';

@Injectable()
export class UsersService {
	constructor (private emailService: EmailService) {}

	async createUser(name: string, email: string, password: string) {
		await this.checkUserExists(email);

		const signupVerifyToken = uuid.v1();

		await this.saveUser(name, email, password, signupVerifyToken);
		await this.sendMemberJoinEmail(email, signupVerifyToken);
	}

	private checkUserExists(email : string)
	{
		return false; // DB 연동 후 구현
	}

	private saveUser(name: string, email: string, password: string, signupVerifyToken: string)
	{
		return ;  // DB 연동 후 구현
	}

	private async sendMemberJoinEmail(email : string, signupVerifyToken: string)
	{
		await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
	}

	async verifyEmail(signupVerifyToken: string): Promise<string> {
		throw new Error('Method not implemented.')
	}

	async login(email: string, password: string): Promise<string> {
		throw new Error('Method not implemented.');
	}

	async getUserInfo(UserId: string): Promise<UserInfo> {
		throw new Error('Method not implemented.');
		
	}
}
