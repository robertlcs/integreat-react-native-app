// @flow

export default class TileModel {
  _id: string
  _title: string
  _path: string
  _thumbnail: string
  _isExternalUrl: boolean

  constructor (params: {|id: string, title: string, path: string, thumbnail: string, isExternalUrl: boolean|}) {
    this._id = params.id
    this._title = params.title
    this._path = params.path
    this._thumbnail = params.thumbnail
    this._isExternalUrl = params.isExternalUrl
  }

  get id (): string {
    return this._id
  }

  get thumbnail (): string {
    return this._thumbnail
  }

  get title (): string {
    return this._title
  }

  get path (): string {
    return this._path
  }

  get isExternalUrl (): boolean {
    return this._isExternalUrl
  }
}
