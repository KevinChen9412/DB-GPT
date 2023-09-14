from datetime import datetime
from typing import List
from sqlalchemy import Column, Integer, String, Index, DateTime, func
from sqlalchemy import UniqueConstraint

from pilot.base_modules.meta_data.meta_data import Base

from pilot.base_modules.meta_data.base_dao import BaseDao
from pilot.base_modules.meta_data.meta_data import Base, engine, session


class MyPluginEntity(Base):
    __tablename__ = 'my_plugin'

    id = Column(Integer, primary_key=True, comment="autoincrement id")
    tenant = Column(String, nullable=True, comment="user's tenant")
    user_code = Column(String, nullable=True, comment="user code")
    user_name = Column(String, nullable=True, comment="user name")
    name = Column(String, unique=True, nullable=False, comment="plugin name")
    type  = Column(String, comment="plugin type")
    version =  Column(String, comment="plugin version")
    use_count = Column(Integer, nullable=True, default=0, comment="plugin total use count")
    succ_count = Column(Integer, nullable=True, default=0, comment="plugin total success count")
    created_at = Column(DateTime, default=datetime.utcnow, comment="plugin install time")
    __table_args__ = (
        UniqueConstraint('name', name="uk_name"),
    )


class MyPluginDao(BaseDao[MyPluginEntity]):
    def __init__(self):
        super().__init__(
            database="dbgpt", orm_base=Base, db_engine =engine , session= session
        )

    def add(self, engity: MyPluginEntity):
        session = self.Session()
        my_plugin = MyPluginEntity(
            tenant=engity.tenant,
            user_code=engity.user_code,
            user_name=engity.user_name,
            name=engity.name,
            type=engity.type,
            version=engity.version,
            use_count=engity.use_count or 0,
            succ_count=engity.succ_count or 0,
            created_at=datetime.now(),
        )
        session.add(my_plugin)
        session.commit()
        id = my_plugin.id
        session.close()
        return id

    def update(self, entity: MyPluginEntity):
        session = self.Session()
        updated = session.merge(entity)
        session.commit()
        return updated.id


    def list(self, query: MyPluginEntity, page=1, page_size=20)->list[MyPluginEntity]:
        session = self.Session()
        my_plugins = session.query(MyPluginEntity)
        if query.id is not None:
            my_plugins = my_plugins.filter(MyPluginEntity.id == query.id)
        if query.name is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.name == query.name
            )
        if query.tenant is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.tenant == query.tenant
            )
        if query.type is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.type == query.type
            )
        if query.user_code is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.user_code == query.user_code
            )
        if query.user_name is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.user_name == query.user_name
            )

        my_plugins = my_plugins.order_by(MyPluginEntity.id.desc())
        my_plugins = my_plugins.offset((page - 1) * page_size).limit( page_size)
        result = my_plugins.all()
        session.close()
        return result

    def count(self, query: MyPluginEntity):
        session = self.Session()
        my_plugins = session.query(func.count(MyPluginEntity.id))
        if query.id is not None:
            my_plugins = my_plugins.filter(MyPluginEntity.id == query.id)
        if query.name is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.name == query.name
            )
        if query.type is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.type == query.type
            )
        if query.tenant is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.tenant == query.tenant
            )
        if query.user_code is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.user_code == query.user_code
            )
        if query.user_name is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.user_name == query.user_name
            )
        count = my_plugins.scalar()
        session.close()
        return count


    def delete(self, plugin_id: int):
        session = self.Session()
        if plugin_id is None:
            raise Exception("plugin_id is None")
        query = MyPluginEntity(id=plugin_id)
        my_plugins = session.query(MyPluginEntity)
        if query.id is not None:
            my_plugins = my_plugins.filter(
                MyPluginEntity.id == query.id
            )
        my_plugins.delete()
        session.commit()
        session.close()