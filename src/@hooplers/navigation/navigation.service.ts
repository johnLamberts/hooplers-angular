import { Injectable } from "@angular/core";
import { HooplerNavigationItem } from "./navigation.types";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private _componentRegistry: Map<string, any> = new Map<string, any>();
  private _navigationStore: Map<string, HooplerNavigationItem[]> = new Map<string, any>();

  constructor() { }

  // -------------------------------
  // Public Methods
  // -------------------------------

  /**
   * register navigation component
   *
   * @param name
   * @param component
   */
  registerComponent(name: string, component: any): void {
    this._componentRegistry.set(name, component);
  }


}
