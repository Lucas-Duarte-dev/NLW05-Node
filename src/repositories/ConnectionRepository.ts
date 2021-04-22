import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../models/Connection";

@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection> {}

export { ConnectionRepository };
