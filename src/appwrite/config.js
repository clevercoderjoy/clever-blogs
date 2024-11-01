import config from "../configs/config";
import { Client, ID, Databases, Storage, Query, Account } from "appwrite";

export class DatabaseServices {
  client = new Client();
  account;
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appWriteApiEndPoint)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, blogImage, content, status, category, featured, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          blogImage,
          content,
          status,
          category,
          featured,
          userId
        }
      )
    } catch (error) {
      throw new error
    }
  }

  async updatePost(slug, { title, blogImage, content, status, category, featured }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          blogImage,
          category,
          content,
          status,
          featured
        }
      )
    } catch (error) {
      throw new error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      throw new error;
    }
  }

  async getPost(slug) {
    try {
      const post = await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      )
      return post;
    } catch (error) {
      throw new error;
    }
  }

  async getActivePosts(queries = [Query.equal("status", "active")]) {
    try {
      const activePosts = await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      )
      return activePosts;
    } catch (error) {
      throw new error;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      throw new error;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(
        config.appWriteBucketId,
        fileID
      )
      return true;
    } catch (error) {
      throw new error;
    }
  }

  getFilePreview(fileID) {
    return this.bucket.getFilePreview(
      config.appWriteBucketId,
      fileID
    )
  }
};

const databaseServices = new DatabaseServices();

export default databaseServices;