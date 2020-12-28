export default interface IUser {
  _id: { $oid: string };
  name: string;
  email: string;
  phone: string;
}
