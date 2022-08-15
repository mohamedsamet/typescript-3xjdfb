// Import stylesheets
import { Permission } from './permission';
import { PermissionConfig } from './permission-config';
import { PERMISSION_CONF } from './permissions-conf';
import './style.css';

export function flatMap<T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U[]
): U[] {
  return Array.prototype.concat(...array.map(callbackfn));
}

function getPermission(query: string[]): Permission[] {
  const permissionList: PermissionConfig = PERMISSION_CONF;
  const permissionListFlatted = flatMap(permissionList.modules, (module) => {
    return module.permissions;
  });
  let permissionsFound: Permission[] = [];
  query.forEach((q) => {
    const permissionFound = getPermissionByList(q, permissionListFlatted);
    if (permissionFound) {
      permissionsFound.push(permissionFound);
    }
  });
  return permissionsFound;
}

function getPermissionByList(
  query: string,
  permissionList: Permission[]
): Permission {
  let permissionFound: Permission;
  if (permissionList !== null) {
    for (let i = 0; i < permissionList.length; i++) {
      if (permissionList[i].code === query) {
        permissionFound = permissionList[i];
        break;
      }
      const permissionByChildren = getPermissionByList(
        query,
        permissionList[i].children
      );
      if (permissionByChildren) {
        permissionFound = permissionByChildren;
        break;
      }
    }
  }
  return permissionFound;
}

const test = getPermission(['p10']);

console.log(test);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1></h1>`;
