import config from "../configs/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWriteApiEndPoint)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, username);
      if (userAccount) {
        return this.login(email, password);
      }
      else {
        return userAccount;
      }
    }
    catch (error) {
      throw new error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password);
      return session;
    }
    catch (error) {
      throw new error;
    }
  }

  async getCurrentUser() {
    try {
      const currentUser = await this.account.get();
      if (currentUser) {
        return currentUser;
      } else {
        return null;
      }
    } catch (error) {
      throw new error;
    }
  }

  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new error;
    }
  }
};

const authService = new AuthService();

export default authService;