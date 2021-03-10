export interface IList {
  address : string;
  img_path : string;
  likes : number;
  sample_imgs : string[];
  tag : string[];
  telephone : number;
  title : string;
  __v ?: number;
  __id ?: number;
}

export interface IAxiosResult {
  result : any;
}